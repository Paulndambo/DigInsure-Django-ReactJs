# Generated by Django 5.0 on 2024-03-01 11:37

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0003_membership_cover_amount"),
    ]

    operations = [
        migrations.RenameField(
            model_name="user",
            old_name="address",
            new_name="physical_address",
        ),
        migrations.AddField(
            model_name="user",
            name="postal_address",
            field=models.CharField(max_length=255, null=True),
        ),
    ]
