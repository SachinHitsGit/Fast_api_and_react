from pydantic import BaseModel
from typing import List
# class Product(BaseModel):
#     id:int
#     name:str
#     description:str
#     price:int
#     quantity:int

class Fruit(BaseModel):
    name:str

class Fruits(BaseModel):
    fruits:List[Fruit]