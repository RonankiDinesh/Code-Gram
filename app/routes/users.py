from fastapi import APIRouter,HTTPException
from odmantic import ObjectId
from app.database import engine
from app.models import User

router = APIRouter()

@router.post("/signup/")
async def create_user(user:User):
    existing_user = await engine.find_one(User,User.email== user.email)
    if existing_user:
        raise HTTPException(status_code = 400,description="Email is already present")
    await engine.save(user)
    return {"message":"User created","user_id":str(user.id)}

@router.get("/login")
async def get_user(user_id:str):
    user = await engine.find_one(User,User.id==ObjectId)
    if not user:
        raise HTTPException(status_code = 404,detail = "User not found")
    return user