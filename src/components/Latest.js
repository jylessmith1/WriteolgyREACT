const Latest = () => {
    const styles = {
        latest: {
        

        }
    }

    return (
        <div>
        <latest style={styles.latest}>

                <article>
                    <h1>Latest Article</h1>
                </article>

                <article>
                    {/* <img class="top-picture" src="Images/management-software.jpg" alt=""> */}
                        <h4>Tips</h4>
                        <h3>How to choose the best management software</h3>
                
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis non laudantium tempore libero,
                            aspernatur aperiam.</p>
                        <div>
                            <p>John Carter</p>
                            <p>June 18, 2022</p>
                        </div>
                </article>
            
         </latest>
            <section>
                <h1>Resources</h1>
                {/* <img class="top-picture" src="Images/organized-productivity.jpg" alt=""> */}
                <h3>10 productivity tools that are worth checkingout</h3>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos ipsa nemo minus soluta, explicabo.
                <div>
                    <p>Sophie More</p>
                    <p>June 16, 2022</p>
                </div>
            </section>
</div>

    )
}

export default Latest