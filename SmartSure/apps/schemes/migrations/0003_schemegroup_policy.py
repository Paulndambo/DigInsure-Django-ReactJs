# Generated by Django 5.0 on 2024-02-17 21:20

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("policies", "0001_initial"),
        ("schemes", "0002_remove_scheme_scheme_term"),
    ]

    operations = [
        migrations.AddField(
            model_name="schemegroup",
            name="policy",
            field=models.OneToOneField(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="schemegroups",
                to="policies.policy",
            ),
        ),
    ]
