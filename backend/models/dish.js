const db = require('../db')
const { NotFoundError, BadRequestError } = require('../expressError')
// const 

class Dish {
    static async create({ id, title, description, price, image}) {
        const duplicateCheck = await db.query(
            `SELECT id
             FROM dishes
             WHERE id = $1`,
        [id])

        if(duplicateCheck.rows[0])
            throw new BadRequestError(`Duplicate company: ${id}`)

        const result = await db.query(
            `INSERT INTO companies
             (id, title, description, price, image)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING id, title, description, price, image`,
             [id, title, description, price, image]
        )

        return result.rows[0]

    }

    static async getAll() {
        const result = await db.query(
            `SELECT *
             FROM dishes`
        )
        
        return result.rows;
    }

    static async get(id) {
        const result = await db.query(
            `SELECT *
             FROM dishes
             WHERE id = $1`,
             [id]
        )
        
        return result.rows[0];
    }

    static async update(id, data) {
        const { setCols, values } = sqlForPartialUpdate(
            data,
            {});
        const idVarIdx = "$" + (values.length + 1);
    
        const querySql = `UPDATE dishes 
                          SET ${setCols} 
                          WHERE id = ${idVarIdx} 
                          RETURNING id,
                                    title,
                                    description,
                                    price,
                                    image
                          `;
        const result = await db.query(querySql, [...values, id]);
        const dish = result.rows[0];
    
        if (!dish) throw new NotFoundError(`No dish: ${id}`);
    
        return dish;
    }

    static async remove(id) {
        let result = await db.query(
              `DELETE
               FROM dishes
               WHERE id = $1
               RETURNING id`,
            [id],
        );
        const dish = result.rows[0];
    
        if (!dish) throw new NotFoundError(`No dish: ${id}`);
      }
}


module.exports = Dish;
