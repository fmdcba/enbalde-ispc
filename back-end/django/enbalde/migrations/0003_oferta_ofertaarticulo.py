# Generated by Django 4.2.1 on 2023-05-18 03:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('enbalde', '0002_alter_tipoarticulo_options_alter_tipoarticulo_table'),
    ]

    operations = [
        migrations.CreateModel(
            name='Oferta',
            fields=[
                ('id_oferta', models.AutoField(primary_key=True, serialize=False)),
                ('porcentaje', models.DecimalField(decimal_places=2, max_digits=4, max_length=4)),
                ('fecha_vencimiento', models.DateField()),
            ],
            options={
                'verbose_name': 'Ofertas de productos',
                'verbose_name_plural': 'Ofertas',
                'db_table': 'Oferta',
            },
        ),
        migrations.CreateModel(
            name='OfertaArticulo',
            fields=[
                ('id_ofertaarticulos', models.AutoField(primary_key=True, serialize=False)),
                ('id_articulos', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='enbalde.producto')),
                ('id_ofertas', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='enbalde.oferta')),
            ],
            options={
                'verbose_name': 'Ofertas de productos',
                'verbose_name_plural': 'OfertasArticulos',
                'db_table': 'OfertaArticulo',
            },
        ),
    ]