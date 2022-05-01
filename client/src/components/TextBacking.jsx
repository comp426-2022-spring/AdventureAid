import classes from './TextBacking.module.css'
function TextBacking(props) {
    return ( 
        <div className={classes.card}> {props.children}</div>
    );
}

export default TextBacking;