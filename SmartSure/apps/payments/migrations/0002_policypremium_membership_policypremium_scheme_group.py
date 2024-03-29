# Generated by Django 5.0 on 2024-02-17 22:09

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("payments", "0001_initial"),
        ("schemes", "0003_schemegroup_policy"),
        ("users", "0002_membership"),
    ]

    operations = [
        migrations.AddField(
            model_name="policypremium",
            name="membership",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="users.membership",
            ),
        ),
        migrations.AddField(
            model_name="policypremium",
            name="scheme_group",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="schemes.schemegroup",
            ),
        ),
    ]
