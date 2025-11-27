from django.urls import path
from .views import VoluntariadoListCreateView

urlpatterns = [
    path("voluntariados/", VoluntariadoListCreateView.as_view(), name="voluntariado-list"),
    path("voluntariados/crear/", VoluntariadoListCreateView.as_view(), name="voluntariado-create"),
]
