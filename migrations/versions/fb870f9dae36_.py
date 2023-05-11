"""empty message

Revision ID: fb870f9dae36
Revises: 
Create Date: 2023-05-11 00:48:54.358984

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fb870f9dae36'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('category',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('subcategory', sa.String(length=200), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('costumer',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('phone_number', sa.String(length=20), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('master',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('phone', sa.String(length=20), nullable=True),
    sa.Column('alias', sa.String(length=100), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('plants',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('size34', sa.Integer(), nullable=True),
    sa.Column('size35', sa.Integer(), nullable=True),
    sa.Column('size36', sa.Integer(), nullable=True),
    sa.Column('size37', sa.Integer(), nullable=True),
    sa.Column('size38', sa.Integer(), nullable=True),
    sa.Column('size39', sa.Integer(), nullable=True),
    sa.Column('size40', sa.Integer(), nullable=True),
    sa.Column('size41', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('username', sa.String(length=20), nullable=True),
    sa.Column('name', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('order',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('master_id', sa.Integer(), nullable=True),
    sa.Column('plant_id', sa.Integer(), nullable=True),
    sa.Column('plant_size', sa.Integer(), nullable=False),
    sa.Column('customer_name', sa.String(length=120), nullable=False),
    sa.Column('customer_number', sa.String(length=20), nullable=False),
    sa.Column('delivery_date', sa.Date(), nullable=True),
    sa.Column('date', sa.Date(), nullable=False),
    sa.Column('price', sa.String(length=10), nullable=True),
    sa.Column('status', sa.String(length=20), nullable=False),
    sa.ForeignKeyConstraint(['master_id'], ['master.id'], ),
    sa.ForeignKeyConstraint(['plant_id'], ['plants.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('plants_transactions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=200), nullable=True),
    sa.Column('master_id', sa.Integer(), nullable=True),
    sa.Column('plant_id', sa.Integer(), nullable=False),
    sa.Column('size34', sa.Integer(), nullable=True),
    sa.Column('size35', sa.Integer(), nullable=True),
    sa.Column('size36', sa.Integer(), nullable=True),
    sa.Column('size37', sa.Integer(), nullable=True),
    sa.Column('size38', sa.Integer(), nullable=True),
    sa.Column('size39', sa.Integer(), nullable=True),
    sa.Column('size40', sa.Integer(), nullable=True),
    sa.Column('size41', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['master_id'], ['master.id'], ),
    sa.ForeignKeyConstraint(['plant_id'], ['plants.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('shoe',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('size_from', sa.Integer(), nullable=True),
    sa.Column('size_to', sa.Integer(), nullable=True),
    sa.Column('photo', sa.String(), nullable=False),
    sa.Column('price', sa.String(), nullable=True),
    sa.Column('category_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['category_id'], ['category.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('shoe')
    op.drop_table('plants_transactions')
    op.drop_table('order')
    op.drop_table('user')
    op.drop_table('plants')
    op.drop_table('master')
    op.drop_table('costumer')
    op.drop_table('category')
    # ### end Alembic commands ###