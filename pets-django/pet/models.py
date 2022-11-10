from django.db import models


class Pet(models.Model):
    nome = models.CharField(blank=False, null=False, max_length=255)  # texto menor
    historia = models.TextField(blank=False, null=False)  # texto maior
    foto = models.URLField(blank=False, null=False)  # URL's
