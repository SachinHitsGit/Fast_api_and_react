from fastapi import FastAPI #for api support
from fastapi import Request #
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates # for template rendering
from fastapi.middleware.cors import CORSMiddleware
from models import Fruit

app = FastAPI()

# CORS - allow React frontend to connect
origins = [
    "http://localhost:5173",  # React dev server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount the static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Load templates
templates = Jinja2Templates(directory="templates")

@app.get("/home")
def root(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})

@app.get("/news")
def online_store(request:Request):
    return templates.TemplateResponse("news.html",{"request": request})

@app.get("/merch")
def online_store(request:Request):
    return templates.TemplateResponse("merch.html",{"request": request})

@app.get("/contact")
def online_store(request:Request):
    return templates.TemplateResponse("contact.html",{"request": request})



                    



























# @app.get("/")
# def greet():
#    return "Hello"

# products = [
#     Product(id=1,name="Phone",description="fair phone",price=399,quantity=100),
#     Product(id=2,name="Pen",description="helps to write",price=5,quantity=163),
#     Product(id=3,name="Laptop",description="ROG laptop",price=1999,quantity=150),
#     Product(id=5,name="Drawing Tablet",description="For Drawing",price=20,quantity=200),
# ]

# @app.get("/products")
# def get_all_product():
#     return products

# @app.get("/products/{id}")
# def get_product_by(id: int):
#     for i in range(len(products)):
#         if products[i].id == id:
#             return products[i]
#     else:
#         return "Not found"
    
# @app.post("/product")
# def add_product(product: Product):
#     products.append(product)
#     return product