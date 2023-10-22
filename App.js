import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { Linking } from "react-native";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const openMail = () => {
    const url = "mailto: sharmasarthak306@gmail.com"; // Replace with your website URL
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred: ", err)
    );
  };
  const openGithub = () => {
    const url = "https://github.com/Srthk-Shrm"; // Replace with your website URL
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred: ", err)
    );
  };
  const openBlogger = () => {
    const url = "https://fashionfusion24.blogspot.com/"; // Replace with your website URL
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred: ", err)
    );
  };
  const openInsta = () => {
    const url = "https://www.instagram.com/i__am_sarthak_sharma/"; // Replace with your website URL
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred: ", err)
    );
  };
  const openLinkedin = () => {
    const url = "https://www.linkedin.com/in/sarthaksharma02/"; // Replace with your website URL
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred: ", err)
    );
  };
  const openTwitter = () => {
    const url = "https://twitter.com/i__am_sarthak"; // Replace with your website URL
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred: ", err)
    );
  };
  const [fontsLoaded] = useFonts({
    exo: require("./assets/static/exo2-regular.ttf"),
  });
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.image} source={require("./assets/image.png")} />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Sarthak Sharma</Text>
            <Text>IET Lucknow</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={openGithub} style={styles.button}>
              <Text>GITHUB</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openBlogger} style={styles.button}>
              <Text>BLOGGER</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.floatingContainer}>
          <TouchableOpacity
            onPress={openInsta}
            style={[
              styles.floatingButtons,
              {
                borderTopLeftRadius: 40,
                borderBottomLeftRadius: 40,
              },
            ]}
          >
            <Text style={styles.floatingText}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openTwitter}
            style={styles.floatingButtons}
          >
            <Text style={styles.floatingText}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openLinkedin}
            style={[
              styles.floatingButtons,
              { borderBottomRightRadius: 40, borderTopRightRadius: 40 },
            ]}
          >
            <Text style={styles.floatingText}>Linkedin</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.briefContainer}>
          <Text style={styles.briefText}>
            I'm Sarthak Sharma, a Pre-Final year Computer Science student
            passionate about AI & app/web development. I have experience in
            multiple programming languages and enjoy learning new ones.I'm
            always seeking growth opportunities.
          </Text>
        </View>
        <MaterialCommunityIcons
          size={40}
          name="arrow-down"
          style={{ marginLeft: 50, marginTop: 150 }}
        />
        <View style={styles.aboutContainer}>
          <Text
            style={{
              fontFamily: "exo",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Words About Myself
          </Text>
          <Text style={{ fontSize: 30, fontFamily: "exo" }}>
            Hello, I'm Sarthak Sharma, a pre-final year Computer Science student
            with a focus on Artificial Intelligence. As an app developer, web
            developer, and competitive programmer, I'm passionate about building
            innovative solutions that push the boundaries of technology.{"\n"}
            {"\n"}
            With a strong foundation in programming languages such as Java,
            Python, JavaScript, C/C++ and Kotlin, I have developed a range of
            apps and websites that showcase my skills in designing user-friendly
            interfaces and creating robust, efficient code. In addition, I am
            always eager to learn new programming languages and technologies
            that can help me take my skills to the next level.{"\n"}
            {"\n"} As a competitive programmer, I have participated in a number
            of coding competitions, where I have demonstrated my ability to
            solve complex problems under tight deadlines. This experience has
            taught me how to work effectively in a team, communicate my ideas
            clearly, and think creatively to come up with innovative solutions.
            {"\n"}
            {"\n"} As I continue to pursue my studies in Computer Science, I am
            excited to explore new areas of artificial intelligence, such as
            machine learning and natural language processing, and apply these
            techniques to real-world problems. Ultimately, my goal is to become
            a leading expert in the field of AI and to use my skills to make a
            positive impact on the world.{"\n"}
            {"\n"} I'm always looking for new opportunities to learn and grow as
            a developer and as a person.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.images}
            source={require("./assets/image2.png")}
          />
          <Image
            style={styles.images}
            source={require("./assets/image3.png")}
          />
          <Image
            style={styles.images}
            source={require("./assets/image4.png")}
          />
        </View>
        <View style={styles.aboutContainer}>
          <Text
            style={{
              fontFamily: "exo",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Work Experience
          </Text>
          <Text style={{ fontSize: 30, fontFamily: "exo", marginVertical: 40 }}>
            INSTANTCALLS | APP DEVELOPER INTERN{"\n"}
            Developed and maintained the frontend of the InstantCalls mobile
            application contributing to its user interface and overall user
            experience{"\n"}
            Utilized React Native, Expo to create interactive features.{"\n"}
            Assisted in troubleshooting and resolving frontend related issues
            ensuring a smooth and error free experience{"\n"}
            Gained Practical experience in frontend development, honing my
            skills.{"\n"}
            Enhanced problem solving ability by troubleshooting and resolving
            related challenges.{"\n"}
          </Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text
            style={{
              fontFamily: "exo",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Connect With Me
          </Text>
          <Text style={{ fontSize: 30, fontFamily: "exo", marginVertical: 40 }}>
            If you want to team up or just chat, you can{" "}
            <TouchableOpacity
              style={{ borderBottomWidth: 2 }}
              onPress={openMail}
            >
              write me an email
            </TouchableOpacity>{" "}
            or hit me up via social media. I occasionally share my thoughts,
            findings and recommendations on{" "}
            <TouchableOpacity
              style={{ borderBottomWidth: 2 }}
              onPress={openTwitter}
            >
              Twitter
            </TouchableOpacity>{" "}
            and post pictures on my (now private){" "}
            <TouchableOpacity
              style={{ borderBottomWidth: 2 }}
              onPress={openInsta}
            >
              Instagram
            </TouchableOpacity>{" "}
            page. You can also collaborate with me on{" "}
            <TouchableOpacity
              style={{ borderBottomWidth: 2 }}
              onPress={openGithub}
            >
              Github
            </TouchableOpacity>
          </Text>
        </View>
        <Text style={{ marginLeft: 60, marginTop: 200 }}>
          Be Kind and Stay Excellent
        </Text>
        <Text style={{ marginLeft: 60, marginTop: 10, marginBottom: 100 }}>
          +91-8077089417
        </Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    marginLeft: 60,
    height: 100,
    width: 100,
    marginTop: 20,
    borderRadius: 100,
  },
  nameContainer: {
    marginTop: 40,
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",

    marginLeft: "55%",
  },
  button: {
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    borderRadius: 30,
    margin: 10,
    alignSelf: "center",
    width: 150,
    alignItems: "center",
  },
  floatingContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 600,
    position: "absolute",
    top: 600,
    alignSelf: "center",
    height: 70,
    flexDirection: "row",
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "black",
  },
  floatingButtons: {
    flex: 1,

    backgroundColor: "black",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  floatingText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  briefContainer: {
    padding: 40,
    marginLeft: 20,
    marginRight: 200,
    marginTop: 60,
  },
  briefText: {
    fontSize: 40,
    fontFamily: "exo",
  },
  aboutContainer: {
    padding: 40,
    marginTop: 300,
    marginLeft: 20,
    marginRight: 100,
  },
  imageContainer: {
    flexDirection: "row",
    padding: 50,
    marginTop: 200,
  },
  images: {
    height: 500,
    width: 400,
    borderRadius: 40,
    margin: 30,
  },
});
