from django.urls import path

from apps.schemes.views import (SchemeDetailAPIView, SchemeGroupAPIView,
                                SchemeGroupDetailAPIView,
                                SchemeListCreateAPIView,
                                SchemePricingPlansAPIView)

urlpatterns = [
    path("", SchemeListCreateAPIView.as_view(), name="schemes"),
    path("<int:pk>/", SchemeDetailAPIView.as_view(), name="scheme-details"),
    path("scheme-groups/", SchemeGroupAPIView.as_view(), name="scheme-groups"),
    path("scheme-groups/<int:pk>/", SchemeGroupDetailAPIView.as_view(), name="scheme-group-details"),
    path("scheme-pricing-plans/", SchemePricingPlansAPIView.as_view(), name="scheme-pricing-plans"),
]