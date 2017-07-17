from rest_framework import generics
from rest_framework import viewsets  
from .models import Book
from .serializers import BookSerializer
from django.contrib.auth.models import User
  
class BookList(generics.ListCreateAPIView):
	"""
	API endpoint for listing and creating Book objects
	"""
	queryset = Book.objects.all()
	serializer_class = BookSerializer
    
          
          
