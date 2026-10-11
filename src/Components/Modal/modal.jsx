import './modal.css'



export function EmailModal({ closeEmailModal, fullName, setFullName, email, setEmail, text, setText, send }) {

    return (
        <div className='modal-bg' onClick={closeEmailModal}>

            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className='close-btn' onClick={closeEmailModal}>X</button>
                <h2>Send an Email</h2>

                <form action="https://formspree.io/f/meaekwwp" method="POST" onSubmit={send} >

                    <div className='label-input'>
                        <label htmlFor="name-input">Full Name :</label>
                        <input
                            type='text'
                            name='fullName'
                            id='name-input'
                            className='modal-input'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder='Enter Your Name ...'
                            required
                        ></input>
                    </div>

                    <div className="label-input">
                        <label htmlFor="email-input">Your Email :</label>
                        <input
                            type="email"
                            name='email'
                            id='email-input'
                            className='modal-input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter Your Email ...'
                            required
                        />
                    </div>

                    <div className="label-input">
                        <label htmlFor="text-input">Your Message :</label>
                        <textarea
                            name='message'
                            id='text-input'
                            className='modal-input'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder='Enter Your Message ...'
                            required
                        />
                    </div>

                    <button className='btn' type="submit">Send</button>

                </form>

            </div>
        </div>

    )
}
