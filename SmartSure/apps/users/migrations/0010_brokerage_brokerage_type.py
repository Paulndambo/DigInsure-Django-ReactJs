# Generated by Django 5.0 on 2024-03-01 12:17

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0009_broker_brokerage_salesagent_broker"),
    ]

    operations = [
        migrations.AddField(
            model_name="brokerage",
            name="brokerage_type",
            field=models.CharField(
                choices=[("Internal", "Internal"), ("External", "External")],
                max_length=255,
                null=True,
            ),
        ),
    ]
