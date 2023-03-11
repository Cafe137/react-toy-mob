import { useState } from 'react'
import './App.css'
import { BattleController } from './BattleController'
import { MobCard } from './MobCard'
import { MobPicker } from './MobPicker'

function App() {
    const [combatants, setCombatants] = useState([])

    function addCombatant(mob) {
        if (combatants.length < 2) {
            const clone = { ...mob }
            setCombatants([...combatants, clone])
        }
    }

    return (
        <div className="App">
            {combatants.length < 2 ? <MobPicker onAdd={addCombatant} /> : null}
            <div className="row">
                {combatants.length === 0 ? <p>Pick 2 mobs!</p> : null}
                {combatants.length === 1 ? <p>Pick 1 mob!</p> : null}
            </div>
            <div className="row gap">
                {combatants.map((mob, index) => (
                    <MobCard
                        key={index}
                        name={mob.name}
                        src={mob.src}
                        health={mob.health}
                        minDamage={mob.minDamage}
                        maxDamage={mob.maxDamage}
                    />
                ))}
            </div>
            {combatants.length === 2 ? <BattleController combatants={combatants} setCombatans={setCombatants} /> : null}
        </div>
    )
}

export default App
