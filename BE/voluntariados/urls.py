from django.urls import path
from .views import VoluntariadoListCreateView, VerVoluntariosDeVoluntariados


urlpatterns = [
    path("crear-voluntariado/", VoluntariadoListCreateView.as_view(), name="voluntariado-list-create"),
    path("ver-voluntarios/", VerVoluntariosDeVoluntariados.as_view(), name="ver-voluntarios"),
]