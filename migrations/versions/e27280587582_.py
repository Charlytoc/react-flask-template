"""empty message

Revision ID: e27280587582
Revises: 8c47ed9d279d
Create Date: 2023-04-22 22:36:51.759293

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e27280587582'
down_revision = '8c47ed9d279d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('shoe', schema=None) as batch_op:
        batch_op.add_column(sa.Column('price', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('shoe', schema=None) as batch_op:
        batch_op.drop_column('price')

    # ### end Alembic commands ###
