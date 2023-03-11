import { MobCard } from './MobCard'
import { MobDatabase } from './MobDatabase'

export function MobPicker({ onAdd }) {
    return (
        <div className="row gap">
            {Object.values(MobDatabase).map((mob, index) => (
                <MobCard
                    key={index}
                    name={mob.name}
                    src={mob.src}
                    health={mob.health}
                    minDamage={mob.minDamage}
                    maxDamage={mob.maxDamage}
                    onPress={() => onAdd(mob)}
                />
            ))}
        </div>
    )
}
