from motor.motor_asyncio import AsyncIOMotorClient
from odmantic import AIOEngine
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URL="mongodb://localhost:27017/"
DB_NAME = "codegram_db"
client = AsyncIOMotorClient(MONGO_URL)
database = client[DB_NAME]
engine = AIOEngine(client =  client ,database="users")

users_collection = database["users"]
posts_collection = database["posts"]
tutorials_collection = database["tutorials"]