from django.urls import path
from .views import VoluntariadoListCreateView


urlpatterns = [
    path("crear-voluntariado/", VoluntariadoListCreateView.as_view(), name="voluntariado-list-create"),
]
