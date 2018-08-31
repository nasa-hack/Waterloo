from django.contrib import admin
from django.urls import path, include
from plot.views import *

urlpatterns = [
    path('test', test)

]
