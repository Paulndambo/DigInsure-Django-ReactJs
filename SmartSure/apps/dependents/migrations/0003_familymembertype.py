# Generated by Django 5.0 on 2024-02-24 22:21

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("dependents", "0002_beneficiary_scheme_group_dependent_scheme_group_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="FamilyMemberType",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("modified", models.DateTimeField(auto_now=True)),
                ("name", models.CharField(max_length=255)),
                ("category", models.CharField(max_length=255)),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
