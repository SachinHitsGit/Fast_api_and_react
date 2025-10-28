from fastapi import FastAPI #for api support
import uvicorn
# from fastapi import Request #
# from fastapi.staticfiles import StaticFiles
# from fastapi.templating import Jinja2Templates # for template rendering
from fastapi.middleware.cors import CORSMiddleware
from models import Fruit, Fruits

app = FastAPI()

# CORS - allow React frontend to connect
origins = [
    "http://localhost:5173",  # React dev server
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

memory_db={"fruits":[]}

@app.get('/fruits',response_model=Fruits)
def get_fruits():
    return Fruits(fruits=memory_db["fruits"])

@app.post('/fruits',response_model=Fruits)
def add_fruit(fruit:Fruit):
    memory_db["fruits"].append(fruit)
    return Fruits(fruits=memory_db["fruits"])

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

# # Mount the static files directory
# app.mount("/static", StaticFiles(directory="static"), name="static")

# # Load templates
# templates = Jinja2Templates(directory="templates")

# @app.get("/home")
# def root(request: Request):
#     return templates.TemplateResponse("home.html", {"request": request})

# @app.get("/news")
# def online_store(request:Request):
#     return templates.TemplateResponse("news.html",{"request": request})

# @app.get("/merch")
# def online_store(request:Request):
#     return templates.TemplateResponse("merch.html",{"request": request})

# @app.get("/contact")
# def online_store(request:Request):
#     return templates.TemplateResponse("contact.html",{"request": request})
