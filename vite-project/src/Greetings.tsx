// interface로 바꿔도 상관은 없음 다만 프로젝트 내부에서 일관성을 유지해야함(type 이든 interface 든 하나만)
type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;// 생략 가능 
    onClick: (name: string) => void;
}

const Greetings = ({ name, mark, optional,onClick }: GreetingsProps) => {
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    )
};

Greetings.defaultProps = {
    mark: '!'
}

export default Greetings;

