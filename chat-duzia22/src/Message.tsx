interface Props {
    self: boolean;
    user: string;
    date: string;
    text: string;
}

export default function (props: Props)  {
    const { user, date, text, self } = props;
    return <>
        <div className={self ? "message self" : "message"}>
        <div className="user">Dunha, aquele!</div>
        <div className= 'data'>12:12 2001/11/05 </div>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto dolores, molestiae consequuntur nulla similique et itaque saepe ab enim nemo quae modi rerum sapiente quasi voluptatum assumenda aliquid voluptatem placeat.
          </div>
        </div>
    </>
}
