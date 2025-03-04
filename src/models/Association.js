import { Model, DataTypes, literal } from "sequelize";
import { sequelize } from "../database/connection.js";

class Association extends Model {
}

Association.init(
    {
        name: {
            type: DataTypes.TEXT,
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        zip_code: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        city: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email_association: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        url_image: {
            type: DataTypes.TEXT,
            unique: true,
        },

        slug: {
            type: DataTypes.TEXT,
            unique: true,
        },

        longitude: {
            type: DataTypes.FLOAT,
        },

        latitude: {
            type: DataTypes.FLOAT,
        },

        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: literal("CURRENT_TIMESTAMP"),
        },
        updated_at: DataTypes.DATE,
    },

    {
        sequelize,
        tableName: "association",
    },
);

export { Association };

