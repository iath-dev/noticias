import React from 'react';
import styles from './index.module.css';
import { useSelect } from '../../hooks';
import { Options } from '../../data';

const Form = () => {

    const [category, CategorySelect] = useSelect('', Options.Categories);

    return ( 
        <div className={`row ${styles.search}`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <CategorySelect />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`btn-large amber darken-2 ${styles.btn_block}`}
                            value="buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Form;
