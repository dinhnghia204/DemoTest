import React from "react";
import "../css/Style.css";

export default function Blog() {
    const blogPosts = [
        {
            id: 1,
            title: "Demo_1",
            date: "24th March 2022",
            content: "Content...",
            image: "./assets/images/blog-1.jpg",
            alt: "Cras accumsan nulla nec lacus ultricies placerat.",
        },
        {
            id: 2,
            title: "Demo_2",
            date: "24th March 2022",
            content: "Content...",
            image: "./assets/images/blog-2.jpg",
            alt: "Dras accumsan nulla nec lacus ultricies placerat.",
        },
        {
            id: 3,
            title: "Demo_3",
            date: "24th March 2022",
            content: "Content...",
            image: "./assets/images/blog-3.jpg",
            alt: "Seas accumsan nulla nec lacus ultricies placerat.",
        },
    ];

    return ( 
        <div>
            <section className="section blog" id="blog" aria-label="blog">
                <div className="container">
                    <p className="section-subtitle text-center">Blog</p>
                    <h2 className="h2 section-title text-center">Tin tức và blog của chúng tôi.</h2>

                    <ul className="blog-list">
                        {blogPosts.map(post => (
                            <li key={post.id}>
                                <div className="blog-card">
                                    <figure className="card-banner img-holder" style={{ '--width': '1180', '--height': '800' }}>
                                        <img src={post.image} width="1180" height="800" loading="lazy" alt={post.alt} className="img-cover" />
                                        <div className="card-badge">
                                            <ion-icon name="calendar-outline"></ion-icon>
                                            <time className="time" datetime="2022-03-24">{post.date}</time>
                                        </div>
                                    </figure>

                                    <div className="card-content">
                                        <h3 className="h3">
                                            <a href="#" className="card-title">{post.title}</a>
                                        </h3>
                                        <p className="card-text">{post.content}</p>
                                        <a href="#" className="card-link" aria-label={`Read more about ${post.title}`}>Read More</a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
