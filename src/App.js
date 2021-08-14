import './App.css';
import { motion } from 'framer-motion';

function App({setan1}) {

  const appanimate = {
    animate: {
      width: "240px",
      height: "240px"
    },
    unanimate: {
      width: "0px",
      height: "0px"
    }
  }

  const appanimate2 = {
    animate: {
      width: "220px",
      height: "220px"
    },
    unanimate: {
      width: "0px",
      height: "0px"
    }
  }

  const appanimate3 = {
    animate: {
      width: "200px",
      height: "200px"
    },
    unanimate: {
      width: "0px",
      height: "0px"
    }
  }

  var title = 'Services'
  return (
    <div id='div_app_whole'>
      <motion.div id='div_u'
        variants={appanimate}
        animate={setan1 == false ? "animate" : "unanimate"}

        transition={{
          delay: 1,
          duration: 1
        }}
      >
        <motion.div id='div_d'
           variants={appanimate2}
           animate={setan1 == false ? "animate" : "unanimate"}

          transition={{
            delay: 1.3,
            duration: 1
          }}
        >
        <motion.header className='App-header'
            variants={appanimate3}
            animate={setan1 == false ? "animate" : "unanimate"}

            transition={{
              delay: 1.6,
              duration: 1
            }}
        >
               <motion.p id='lt'
                  style={{
                    color: "white",
                    opacity: 0
                  }}

                  animate={{
                    opacity: setan1 == false ? 1 : 0
                  }}

                  transition={{
                    delay: setan1 == false ? 2 : 0,
                    duration: 2
                  }}
               >{title}</motion.p>
        </motion.header>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
