export function MobCard({ src, name, health, minDamage, maxDamage, onPress }) {
    return (
        <div className="mob-card" onClick={onPress}>
            <img src={src} alt="{name}" />
            <h2>{name}</h2>
            <div className="row">
                <img src="heart.png" alt="Health" className="icon" />
                <p>{health}</p>
            </div>
            <div className="row">
                <img src="sword.png" alt="Damage" className="icon" />
                <p>
                    {minDamage} - {maxDamage}
                </p>
            </div>
        </div>
    )
}
