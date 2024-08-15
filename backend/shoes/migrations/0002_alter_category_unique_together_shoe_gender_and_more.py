# Generated by Django 4.2 on 2024-08-15 08:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("shoes", "0001_initial"),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name="category",
            unique_together=set(),
        ),
        migrations.AddField(
            model_name="shoe",
            name="gender",
            field=models.CharField(
                choices=[("Male", "Male"), ("Female", "Female")],
                default="Male",
                max_length=6,
                verbose_name="gender",
            ),
        ),
        migrations.AlterField(
            model_name="category",
            name="name",
            field=models.CharField(max_length=100, unique=True, verbose_name="name"),
        ),
        migrations.AlterField(
            model_name="category",
            name="slug",
            field=models.SlugField(
                auto_created=True, max_length=100, unique=True, verbose_name="slug"
            ),
        ),
        migrations.RemoveField(
            model_name="category",
            name="gender",
        ),
    ]
