
import { Products } from "./Products.js";
import { Users } from "./Users.js";
import { SalesOrder } from "./SalesOrder.js";
import { Roles } from "./Roles.js";
import { PaymentMethods } from "./PaymentMethods.js";
import { Categories } from "./Categories.js";
import { CartItems } from "./CartItems.js";
import { Cart } from "./Cart.js";

/* Relacion de los Productos con el detalle de carrito */
Products.hasMany(CartItems, {
    foreignKey: {
        name: 'product_id',
        allowNull: false
    },
    sourceKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

/* Relacion del Detalle del Carrito a los Productos */
CartItems.belongsTo(Products, {
    foreignKey: 'product_id',
    targetId: 'id'
});


/* Relacion de la Categoria con los Productos */
Categories.hasMany(Products, {
    foreignKey: {
        name: 'category_id',
        allowNull: false
    },
    sourceKey: 'id',
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE'
});

/* Relacion de los Productos con la Categoria */
Products.belongsTo(Categories, {
    foreignKey: 'category_id',
    targetId: 'id'
});

/* Relacion Usuario al Carrito */
Users.hasMany(Cart, {
    /* Declaración de la asociación */
    foreignKey: {
        name: "user_id",
        allowNull: false,
    },
    sourceKey: "id",
    /* Acciones de actualización y borrado */
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
});

/* Relacion Carrito al Usuario */
Cart.belongsTo(Users, {
    /* Declaración de la asociación */
    foreignKey: "user_id",
    targetId: "id",
});

/* Relacion Usuario a la Orden de Venta */
Users.hasMany(SalesOrder, {
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
    sourceKey: 'id',

    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
});

/* Relacion Orden de Venta al Usuario */
SalesOrder.belongsTo(Users, {
    foreignKey: 'user_id',
    targetId: 'id'
});

/* Relacion de los Roles a los  Usuario */
Roles.hasMany(Users, {
    foreignKey: {
        name: 'role_id',
        allowNull: false
    },
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});

/* Relacion de los Roles de Usuario con los Roles */
Users.belongsTo(Roles, {
    foreignKey: 'role_id',
    targetId: 'id'
});


/* Relacion Metodo de Pago con el Carrito */
PaymentMethods.hasMany(Cart, {

    foreignKey: {
        name: "payment_id",
        allowNull: false,
    },
    sourceKey: "id",
    /* Acciones de actualización y borrado */

    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
});

/* relacion del Carritocon el Metodo de Pago */
Cart.belongsTo(PaymentMethods, {

    /* Declaración de la asociación */
    foreignKey: "payment_id",
    targetId: "id",
});

/* Relacion Carrito al detalle de carrito */
Cart.hasMany(CartItems, {
    foreignKey: {
        name: "cart_id",
        allowNull: false,
    },
    sourceKey: "id",
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
});

/* Relacion del Detalle del Carrito al Carrito */
CartItems.belongsTo(Cart, {
    foreignKey: "cart_id",
    targetId: "id",
});

/* Relacion carrito de compras a orden de venta */
Cart.hasMany(SalesOrder, {
    foreignKey: {
        name: "cart_id",
        allowNull: false,
    },
    sourceKey: "id",
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
});

/* Relacion de la Orden de Venta con el Carrito */
SalesOrder.belongsTo(Cart, {
    foreignKey: "cart_id",
    targetId: "id",
});


export { Products, Users, Roles, PaymentMethods, Categories, CartItems, Cart, SalesOrder };