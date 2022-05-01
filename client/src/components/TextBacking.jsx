import classes from './TextBacking.module.css'
function TextBacking(props) {
    return ( 
        <div className={classes.textbacking}> {props.children}</div>
    );
}

export default TextBacking;