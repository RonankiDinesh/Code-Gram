from typing import Optional
from pydantic import BaseModel, EmailStr

class UserCreateSchema(BaseModel):
    """Schema for creating a new user"""
    username: str
    email: EmailStr
    password: str

class UserResponseSchema(BaseModel):
    """Schema for returning user data (without password)"""
    id: str
    username: str
    email: EmailStr
    bio: Optional[str] = None

class PostCreateSchema(BaseModel):
    """Schema for creating a new post"""
    title: str
    content: str
    author: str

class PostResponseSchema(BaseModel):
    """Schema for returning post data"""
    id: str
    title: str
    content: str
    author: str
    created_at: Optional[str] = None

class TutorialCreateSchema(BaseModel):
    """Schema for creating a tutorial"""
    title: str
    description: str
    author: str
    content: str

class TutorialResponseSchema(BaseModel):
    """Schema for returning tutorial data"""
    id: str
    title: str
    description: str
    author: str
    content: str
    created_at: Optional[str] = None
