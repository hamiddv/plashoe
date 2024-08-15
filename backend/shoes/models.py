from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _


class Category(models.Model):
    name = models.CharField(_("name"), max_length=100, unique=True)
    slug = models.SlugField(_("slug"), max_length=100, unique=True, auto_created=True)
    create_date = models.DateTimeField(_("create date"), auto_now_add=True)
    update_date = models.DateTimeField(_("update date"), auto_now=True)

    def save(self, *args, **kwargs):
        self.update_date = timezone.now()
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('category')
        verbose_name_plural = _('categories')


class Shoe(models.Model):
    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
    )

    gender = models.CharField(_("gender"), max_length=6, choices=GENDER_CHOICES, default=GENDER_CHOICES[0][0])
    name = models.CharField(_("name"), max_length=100)
    description = models.TextField(_("description"))
    stock = models.PositiveIntegerField(_("stock"))
    free_shipping = models.BooleanField(_("free shipping"), default=False)
    categories = models.ManyToManyField(Category, verbose_name=_("categories"))
    create_date = models.DateTimeField(_("create date"), auto_now_add=True)
    update_date = models.DateTimeField(_("update date"), auto_now=True)

    def save(self, *args, **kwargs):
        self.update_date = timezone.now()
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('shoe')
        verbose_name_plural = _('shoes')
