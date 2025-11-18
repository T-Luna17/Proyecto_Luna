from django.shortcuts import render
from .models import Voluntariado
from .serializers import VoluntariadoSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView


class VoluntariadoListCreateView(ListCreateAPIView):
    queryset = Voluntariado.objects.all()
    serializer_class = VoluntariadoSerializer
