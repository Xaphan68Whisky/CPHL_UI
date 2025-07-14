from django.urls import path
from .views import (
    RegisterView,
    ProjectListCreateView,
    ProjectDetailView,
    ProjectProgressListCreateView,
    ComplaintListCreateView,
)
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('projects/', ProjectListCreateView.as_view(), name='project-list-create'),
    path('projects/<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),
    path('projects/<int:project_pk>/progress/', ProjectProgressListCreateView.as_view(), name='project-progress-list-create'),
    path('projects/<int:project_pk>/complaints/', ComplaintListCreateView.as_view(), name='complaint-list-create'),
]
