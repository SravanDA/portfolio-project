import React, { useState } from 'react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [email, setEmail] = useState('');
  
  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  // Right Arrow SVG Component
  const ArrowRight = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5l7 7-7 7" />
    </svg>
  );

  // Northeast Arrow SVG Component
  const ArrowNortheast = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10" />
    </svg>
  );

  // X Close SVG Component
  const XIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const HomePage = () => (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>S Sravan</div>
        <div style={styles.headerButtons}>
          <button 
            onClick={() => navigateToPage('contact')}
            style={styles.talkButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ffffff';
            }}
          >
            Let's Talk 
            <ArrowRight className="arrow-icon" />
          </button>
          <button 
            style={styles.closeButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ffffff';
            }}
          >
            <XIcon className="close-icon" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.content}>
          
          {/* Navigation Items */}
          <div style={styles.navItems}>
            <div 
              onClick={() => navigateToPage('home')}
              style={styles.navItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottomColor = '#666666';
                const arrow = e.currentTarget.querySelector('.nav-arrow');
                if (arrow) {
                  arrow.style.backgroundColor = '#ffffff';
                  arrow.style.color = '#000000';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottomColor = 'rgba(128, 128, 128, 0.6)';
                const arrow = e.currentTarget.querySelector('.nav-arrow');
                if (arrow) {
                  arrow.style.backgroundColor = 'transparent';
                  arrow.style.color = '#ffffff';
                }
              }}
            >
              <div style={styles.navContent}>
                <h2 style={styles.navTitle}>Home</h2>
                <span style={styles.navNumber}>(01)</span>
              </div>
              <div className="nav-arrow" style={styles.navArrow}>
                <ArrowRight className="nav-arrow-icon" />
              </div>
            </div>

            <div 
              onClick={() => navigateToPage('about')}
              style={styles.navItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottomColor = '#666666';
                const arrow = e.currentTarget.querySelector('.nav-arrow');
                if (arrow) {
                  arrow.style.backgroundColor = '#ffffff';
                  arrow.style.color = '#000000';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottomColor = 'rgba(128, 128, 128, 0.6)';
                const arrow = e.currentTarget.querySelector('.nav-arrow');
                if (arrow) {
                  arrow.style.backgroundColor = 'transparent';
                  arrow.style.color = '#ffffff';
                }
              }}
            >
              <div style={styles.navContent}>
                <h2 style={styles.navTitle}>About Me</h2>
                <span style={styles.navNumber}>(02)</span>
              </div>
              <div className="nav-arrow" style={styles.navArrow}>
                <ArrowRight className="nav-arrow-icon" />
              </div>
            </div>

            <div 
              onClick={() => navigateToPage('works')}
              style={styles.navItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottomColor = '#666666';
                const arrow = e.currentTarget.querySelector('.nav-arrow');
                if (arrow) {
                  arrow.style.backgroundColor = '#ffffff';
                  arrow.style.color = '#000000';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottomColor = 'rgba(128, 128, 128, 0.6)';
                const arrow = e.currentTarget.querySelector('.nav-arrow');
                if (arrow) {
                  arrow.style.backgroundColor = 'transparent';
                  arrow.style.color = '#ffffff';
                }
              }}
            >
              <div style={styles.navContent}>
                <h2 style={styles.navTitle}>Projects</h2>
                <span style={styles.navNumber}>(03)</span>
              </div>
              <div className="nav-arrow" style={styles.navArrow}>
                <ArrowRight className="nav-arrow-icon" />
              </div>
            </div>

            <div 
              onClick={() => navigateToPage('insights')}
              style={styles.navItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottomColor = '#666666';
                const arrow = e.currentTarget.querySelector('.nav-arrow');
                if (arrow) {
                  arrow.style.backgroundColor = '#ffffff';
                  arrow.style.color = '#000000';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottomColor = 'rgba(128, 128, 128, 0.6)';
                const arrow = e.currentTarget.querySelector('.nav-arrow');
                if (arrow) {
                  arrow.style.backgroundColor = 'transparent';
                  arrow.style.color = '#ffffff';
                }
              }}
            >
              <div style={styles.navContent}>
                <h2 style={styles.navTitle}>Experience</h2>
                <span style={styles.navNumber}>(04)</span>
              </div>
              <div className="nav-arrow" style={styles.navArrow}>
                <ArrowRight className="nav-arrow-icon" />
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer style={styles.footer}>
            <div style={styles.footerContent}>
              <div style={styles.socialSection}>
                <h3 style={styles.footerTitle}>Connect w/ me.</h3>
                <div style={styles.socialLinks}>
                  {['LINKEDIN', 'GITHUB', 'INSTAGRAM', 'NOTION'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      style={styles.socialLink}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#C0FE05';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#ffffff';
                      }}
                    >
                      {social}
                      <ArrowNortheast className="social-arrow" style={styles.socialArrow} />
                    </a>
                  ))}
                </div>
              </div>
              
              <div style={styles.emailSection}>
                <h3 style={styles.footerTitle}>Contact.</h3>
                <div style={styles.emailForm}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.emailInput}
                    onFocus={(e) => {
                      e.target.style.borderBottomColor = '#C0FE05';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderBottomColor = '#666666';
                    }}
                  />
                  <button 
                    style={styles.emailButton}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#C0FE05';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#ffffff';
                    }}
                  >
                    <ArrowNortheast className="email-arrow" style={styles.emailArrow} />
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>

      <style>{`
        .arrow-icon {
          width: 12px;
          height: 12px;
          margin-left: 8px;
          transition: transform 0.3s ease;
        }
        
        .arrow-icon:hover {
          transform: rotate(12deg);
        }
        
        .close-icon {
          width: 16px;
          height: 16px;
        }
        
        .nav-arrow-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }
        
        .nav-arrow-icon:hover {
          transform: rotate(12deg);
        }
        
        .social-arrow {
          width: 16px;
          height: 16px;
          margin-left: 12px;
          transition: transform 0.3s ease;
        }
        
        .social-arrow:hover {
          transform: rotate(12deg);
        }
        
        .email-arrow {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }
        
        .email-arrow:hover {
          transform: rotate(12deg);
        }
        
        @media (max-width: 768px) {
          .nav-title {
            font-size: 80px !important;
          }
        }
        
        @media (max-width: 480px) {
          .nav-title {
            font-size: 60px !important;
          }
        }
      `}</style>
    </div>
  );

  const AboutPage = () => (
    <div style={styles.container}>
      <header style={styles.header}>
        <div 
          style={{...styles.logo, cursor: 'pointer'}}
          onClick={() => navigateToPage('home')}
          onMouseEnter={(e) => {
            e.target.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#cccccc';
          }}
        >
          showcasy.
        </div>
        <div style={styles.headerButtons}>
          <button 
            onClick={() => navigateToPage('contact')}
            style={styles.talkButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ffffff';
            }}
          >
            Let's Talk 
            <ArrowRight className="arrow-icon" />
          </button>
          <button 
            onClick={() => navigateToPage('home')}
            style={styles.closeButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ffffff';
            }}
          >
            <XIcon className="close-icon" />
          </button>
        </div>
      </header>

      <div style={styles.pageContent}>
        <div style={styles.pageContainer}>
          <h1 style={styles.pageTitle}>About Me</h1>
          <div style={styles.aboutText}>
            <p style={styles.paragraph}>I'm a passionate designer and developer focused on creating meaningful digital experiences that bridge the gap between beautiful design and functional technology.</p>
            <p style={styles.paragraph}>With over 5 years of experience in the industry, I've worked with startups and established companies to bring their visions to life through thoughtful design and clean code.</p>
            <p style={styles.paragraph}>My approach combines user-centered design principles with modern development practices to create solutions that not only look great but perform exceptionally.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const WorksPage = () => (
    <div style={styles.container}>
      <header style={styles.header}>
        <div 
          style={{...styles.logo, cursor: 'pointer'}}
          onClick={() => navigateToPage('home')}
          onMouseEnter={(e) => {
            e.target.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#cccccc';
          }}
        >
          S Sravan.
        </div>
        <div style={styles.headerButtons}>
          <button 
            onClick={() => navigateToPage('contact')}
            style={styles.talkButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ffffff';
            }}
          >
            Let's Talk 
            <ArrowRight className="arrow-icon" />
          </button>
          <button 
            onClick={() => navigateToPage('home')}
            style={styles.closeButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ffffff';
            }}
          >
            <XIcon className="close-icon" />
          </button>
        </div>
      </header>

      <div style={styles.pageContent}>
        <div style={styles.worksContainer}>
          <h1 style={styles.pageTitle}>Works</h1>
          <div style={styles.projectGrid}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} style={styles.projectCard}>
                <div style={styles.projectImage}>
                  <span style={styles.projectPlaceholder}>Project {item}</span>
                </div>
                <h3 style={styles.projectTitle}>Project Title {item}</h3>
                <p style={styles.projectDescription}>Brief description of the project and technologies used.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const InsightsPage = () => (
    <div style={styles.container}>
      <header style={styles.header}>
        <div 
          style={{...styles.logo, cursor: 'pointer'}}
          onClick={() => navigateToPage('home')}
          onMouseEnter={(e) => {
            e.target.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#cccccc';
          }}
        >
          S Sravan.
        </div>
        <div style={styles.headerButtons}>
          <button 
            onClick={() => navigateToPage('contact')}
            style={styles.talkButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ffffff';
            }}
          >
            Let's Talk 
            <ArrowRight className="arrow-icon" />
          </button>
          <button 
            onClick={() => navigateToPage('home')}
            style={styles.closeButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ffffff';
            }}
          >
            <XIcon className="close-icon" />
          </button>
        </div>
      </header>

      <div style={styles.pageContent}>
        <div style={styles.pageContainer}>
          <h1 style={styles.pageTitle}>Insights</h1>
          <div style={styles.insightsContainer}>
            {[1, 2, 3].map((item) => (
              <article key={item} style={styles.insightCard}>
                <h2 style={styles.insightTitle}>Design Insight {item}</h2>
                <p style={styles.insightDate}>Published on March {item}, 2024</p>
                <p style={styles.insightContent}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <button 
                  style={styles.readMoreButton}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#cccccc';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#ffffff';
                  }}
                >
                  Read More 
                  <ArrowRight className="social-arrow" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div style={styles.container}>
      <header style={styles.header}>
        <div 
          style={{...styles.logo, cursor: 'pointer'}}
          onClick={() => navigateToPage('home')}
          onMouseEnter={(e) => {
            e.target.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#cccccc';
          }}
        >
          showcasy.
        </div>
        <div style={styles.headerButtons}>
          <button style={{...styles.talkButton, backgroundColor: '#ffffff', color: '#000000'}}>
            Let's Talk 
            <ArrowRight className="arrow-icon" />
          </button>
          <button 
            onClick={() => navigateToPage('home')}
            style={styles.closeButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ffffff';
            }}
          >
            <XIcon className="close-icon" />
          </button>
        </div>
      </header>

      <div style={styles.pageContent}>
        <div style={styles.contactContainer}>
          <h1 style={styles.pageTitle}>Let's Talk</h1>
          <div style={styles.contactForm}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Name</label>
              <input 
                type="text"
                style={styles.formInput}
                onFocus={(e) => {
                  e.target.style.borderBottomColor = '#ffffff';
                }}
                onBlur={(e) => {
                  e.target.style.borderBottomColor = '#666666';
                }}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Email</label>
              <input 
                type="email"
                style={styles.formInput}
                onFocus={(e) => {
                  e.target.style.borderBottomColor = '#ffffff';
                }}
                onBlur={(e) => {
                  e.target.style.borderBottomColor = '#666666';
                }}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Message</label>
              <textarea 
                rows="5"
                style={{...styles.formInput, resize: 'none'}}
                onFocus={(e) => {
                  e.target.style.borderBottomColor = '#ffffff';
                }}
                onBlur={(e) => {
                  e.target.style.borderBottomColor = '#666666';
                }}
              />
            </div>
            <button 
              style={styles.sendButton}
              onMouseEnter={(e) => {
                e.target.style.color = '#cccccc';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#ffffff';
              }}
            >
              Send Message 
              <ArrowRight className="email-arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // CSS Styles Object
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#0a0b0d',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      overflow: 'hidden',
      padding: '0 20px 10px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 32px',
    },
    logo: {
      fontSize: '20px',
      fontWeight: '400',
      letterSpacing: '0.025em',
      color: '#cccccc',
      transition: 'color 0.3s ease'
    },
    headerButtons: {
      display: 'flex',
      gap: '12px'
    },
    talkButton: {
      padding: '8px 20px',
      border: '1px solid #666666',
      borderRadius: '9999px',
      backgroundColor: 'transparent',
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: '400',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.3s ease'
    },
    closeButton: {
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #666666',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    main: {
      padding: '20px 32px 0'
    },
    content: {
      maxWidth: '1400px',
      margin: '0 auto'
    },
    navItems: {
      display: 'flex',
      flexDirection: 'column'
    },
    navItem: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 0',
      borderBottom: '1px solid rgba(128, 128, 128, 0.15)',
      cursor: 'pointer',
      overflow: 'hidden',
      '&:hover': {
        '&::after': {
          transform: 'translateX(0%)',
          opacity: 0.6
        },
        color: 'rgba(255, 255, 255, 0.95)',
        '& $navNumber': {
          color: '#C0FE05'
        },
        '& $navArrow': {
          borderColor: '#C0FE05',
          '& .nav-arrow-icon': {
            color: '#C0FE05'
          }
        }
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '1px',
        backgroundColor: '#C0FE05',
        transform: 'translateX(-100%)',
        opacity: 0,
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transition: 'all 0.3s ease'
    },
    navContent: {
      display: 'flex',
      alignItems: 'center'
    },
    navTitle: {
      fontSize: 'clamp(72px, 6.5vw, 144px)',
      fontWeight: '400',
      letterSpacing: '-0.02em',
      lineHeight: '0.8',
      color: 'rgba(255, 255, 255, 0.9)',
      margin: '0',
      position: 'relative',
      display: 'inline-block',
      transition: 'all 0.3s ease',
      '&:hover': {
        color: '#ffffff',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '0%',
        height: '1px',
        bottom: '-2px',
        left: '0',
        backgroundColor: '#C0FE05',
        transition: 'width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      '&:hover::after': {
        width: '100%',
      }
    },
    navNumber: {
      color: '#888888',
      fontSize: '20px',
      fontWeight: '300',
      marginLeft: '32px'
    },
    navArrow: {
      width: '80px',
      height: '55px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      backgroundColor: 'transparent',
      '& .nav-arrow-icon': {
        width: '20px',
        height: '20px',
        transition: 'all 0.3s ease',
        color: 'rgba(255, 255, 255, 0.8)'
      },
      '&:hover': {
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
      },
      '&:hover .nav-arrow-icon': {
        transform: 'translateX(2px)',
        color: '#000000'
      }
    },
    footer: {
      marginTop: '40px',
      paddingTop: '20px'
    },
    footerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '64px',
      flexWrap: 'wrap'
    },
    socialSection: {
      flex: 1
    },
    footerTitle: {
      color: '#888888',
      marginBottom: '32px',
      fontSize: '16px',
      fontWeight: '400'
    },
    socialLinks: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '32px'
    },
    socialLink: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '14px',
      letterSpacing: '0.05em',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      transition: 'color 0.3s ease'
    },
    emailSection: {
      flex: 1
    },
    emailForm: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    },
    emailInput: {
      backgroundColor: 'transparent',
      border: 'none',
      borderBottom: '1px solid #666666',
      padding: '12px 0',
      color: '#ffffff',
      fontSize: '14px',
      width: '288px',
      outline: 'none',
      transition: 'border-color 0.3s ease'
    },
    emailButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    },
    pageContent: {
      padding: '64px 32px'
    },
    pageContainer: {
      maxWidth: '1024px',
      margin: '0 auto'
    },
    pageTitle: {
      fontSize: 'clamp(48px, 8vw, 112px)',
      fontWeight: '300',
      marginBottom: '48px'
    },
    aboutText: {
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    },
    paragraph: {
      fontSize: '18px',
      lineHeight: '1.6',
      color: '#cccccc'
    },
    worksContainer: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    projectGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '48px'
    },
    projectCard: {
      cursor: 'pointer'
    },
    projectImage: {
      backgroundColor: '#1f2937',
      aspectRatio: '16/9',
      borderRadius: '8px',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.3s ease'
    },
    projectPlaceholder: {
      color: '#888888'
    },
    projectTitle: {
      fontSize: '20px',
      fontWeight: '300',
      marginBottom: '8px'
    },
    projectDescription: {
      color: '#aaaaaa',
      fontSize: '14px'
    },
    insightsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '48px'
    },
    insightCard: {
      borderBottom: '1px solid #1f2937',
      paddingBottom: '48px'
    },
    insightTitle: {
      fontSize: '24px',
      fontWeight: '300',
      marginBottom: '16px'
    },
    insightDate: {
      color: '#aaaaaa',
      marginBottom: '16px'
    },
    insightContent: {
      color: '#cccccc',
      lineHeight: '1.6'
    },
    readMoreButton: {
      marginTop: '16px',
      color: '#ffffff',
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      transition: 'color 0.3s ease'
    },
    contactContainer: {
      maxWidth: '512px',
      margin: '0 auto'
    },
    contactForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    formLabel: {
      color: '#aaaaaa',
      marginBottom: '8px'
    },
    formInput: {
      backgroundColor: 'transparent',
      border: 'none',
      borderBottom: '1px solid #666666',
      padding: '12px 0',
      color: '#ffffff',
      outline: 'none',
      transition: 'border-color 0.3s ease'
    },
    sendButton: {
      marginTop: '32px',
      display: 'flex',
      alignItems: 'center',
      color: '#ffffff',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    }
  };

  return (
    <>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'works' && <WorksPage />}
      {currentPage === 'insights' && <InsightsPage />}
      {currentPage === 'contact' && <ContactPage />}
    </>
  );
};

export default Portfolio;