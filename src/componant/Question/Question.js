import React from 'react';

const Question = () => {
    return (
        <div>
            <div>
                <h1 className='App'>Question No 1</h1>
            <div className=' row row-cols-1 text-white'>
                <div className='d-flax col-6 bg-info p-5'>
                    <h5>Props</h5>
                    <p>
                        <span>1. When a component is called, the props are sent.</span><br />
                        <span>2. Props cannot be changed.</span><br />
                        <span>3. props are read-only.</span><br />
                    </p>
                </div>
            <div className='d-flax col-6 bg-primary p-5'>
            <h5>State</h5>
                    <p>
                        <span>1. The state is the component's own object.</span><br />
                        <span>2. The state can be changed if desired.</span><br />
                        <span>3. The state can be modified using this setstate.</span><br />
                    </p>
            </div>
        </div>
        </div>
        <div>
                <h1 className='App'>Question No 2</h1>
           
            <div className='bg-primary p-5 text-white'>
                    <p>
                    When the setState () request is triggered, React creates a new tree that contains the reactive component in the component. This tree is used to determine how the UI of the search element should change in response to state changes compared to previous tree elements.
                    </p>
            </div>
        </div>
        </div>
    );
};

export default Question;