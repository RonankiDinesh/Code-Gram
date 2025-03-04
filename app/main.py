from fastapi import FastAPI
from app.database import users_collection
from app.models import UserModel
from bson import ObjectId
from app.schemas import UserResponseSchema,UserCreateSchema

app = FastAPI()

@app.get("/users/")
async def get_users():
    """Fetch all users from MongoDB"""
    users = await users_collection.find().to_list(100)
    for user in users:
        user["_id"] = str(user["_id"])  # Convert ObjectId to string
    return {"users": users}

@app.post("/users/",response_model=UserResponseSchema)
async def create_user(user:UserCreateSchema):
    new_user = user.dict()
    inserted_user = await users_collection.insert_one(new_user)
    new_user["_id"] = str(inserted_user.inserted_id)
    return new_user