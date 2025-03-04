from typing import Optional
from bson import ObjectId
from pydantic import BaseModel,Field

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod 
    def validate(cls,v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid ObjectId")
        return ObjectId(v)
    
class UserModel(BaseModel):
    id : Optional[PyObjectId] = Field(alias="_id",default=None)
    username : str
    email : str
    password : str
    bio :Optional[str]=None

    class Config:
        json_encoders = {ObjectId:str}
        from_attributes = True

class PostModel(BaseModel):
    id : Optional[PyObjectId] = Field(alias="_id",default=None)
    title : str
    content : str
    author : str
    created_at :Optional[str]=None
    class Config:
        json_encoders = {ObjectId:str}
        from_attributes = True

class TutorialModel(BaseModel):
    id : Optional[PyObjectId] = Field(alias="_id",default=None)
    title : str
    description : str
    content : str
    author : str
    created_at :Optional[str]=None
    class Config:
        json_encoders = {ObjectId:str}
        from_attributes = True
