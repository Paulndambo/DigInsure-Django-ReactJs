# Generated by Django 5.0 on 2024-02-24 13:48

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0002_membership"),
    ]

    operations = [
        migrations.AddField(
            model_name="membership",
            name="cover_amount",
            field=models.DecimalField(decimal_places=2, default=0, max_digits=100),
        ),
    ]
