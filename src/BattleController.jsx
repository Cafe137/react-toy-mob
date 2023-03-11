import { Random } from 'cafe-utility'
import { useState } from 'react'

export function BattleController({ combatants, setCombatans }) {
    const [attacker, setAttacker] = useState(0)
    const [battleLog, setBattleLog] = useState([])
    const [battleOver, setBattleOver] = useState(false)

    function onAttack() {
        const defender = attacker === 0 ? 1 : 0
        const damage = Random.intBetween(combatants[attacker].minDamage, combatants[attacker].maxDamage)
        const newCombatants = [...combatants]
        newCombatants[defender].health -= damage
        setCombatans(newCombatants)
        setAttacker(defender)
        setBattleLog([
            `${combatants[attacker].name} hit ${combatants[defender].name} for ${damage} damage.`,
            ...battleLog
        ])
        if (newCombatants[defender].health <= 0) {
            setBattleLog([`${combatants[defender].name} has died.`, ...battleLog])
            setBattleOver(true)
        }
    }

    function onReturn() {
        setCombatans([])
    }

    return (
        <div>
            {battleOver === false ? <button onClick={onAttack}>Attack</button> : null}
            {battleOver === true ? <button onClick={onReturn}>Return</button> : null}
            {battleLog.map((log, index) => (
                <p key={index}>{log}</p>
            ))}
        </div>
    )
}
