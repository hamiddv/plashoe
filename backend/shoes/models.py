from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from django.utils.translation import gettext_lazy as _


class Category(models.Model):
    name = models.CharField(_("name"), max_length=100, unique=True)
    slug = models.SlugField(_("slug"), max_length=100, unique=True, auto_created=True)
    create_date = models.DateTimeField(_("create date"), auto_now_add=True)
    update_date = models.DateTimeField(_("update date"), auto_now=True)

    def save(self, *args, **kwargs):
        self.update_date = timezone.now()
        self.slug = slugify(self.name)
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('category')
        verbose_name_plural = _('categories')


class Shoe(models.Model):
    GENDER_CHOICES = (
        ('Men', 'Men'),
        ('Women', 'Women'),
    )

    gender = models.CharField(_("gender"), max_length=6, choices=GENDER_CHOICES, default=GENDER_CHOICES[0][0])
    name = models.CharField(_("name"), max_length=100)
    description = models.TextField(_("description"))
    stock = models.PositiveIntegerField(_("stock"))
    rate = models.PositiveSmallIntegerField(_("rate"), default=0)
    free_shipping = models.BooleanField(_("free shipping"), default=False)
    image = models.ImageField(_("image"), upload_to="shoes/images")
    price = models.PositiveIntegerField(_("price"), default=0)
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
