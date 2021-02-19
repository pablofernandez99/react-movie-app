import React from 'react'
import { NavLink } from 'react-router-dom'

const Popular = () => (
    <section>
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/popular">
                            Lo más popular
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/avances">
                            Últimos avances
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
)

export default Popular