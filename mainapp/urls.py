from django.urls import path
from . import views

app_name = 'mainapp'
urlpatterns = [
    path('api', views.TopList.as_view()),
    path('', views.FrontendAppView.as_view()),
]