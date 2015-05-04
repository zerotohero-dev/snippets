sudo apt-get update;

sudo apt-get install default-jre;

# intellij idea needs default-jdk
sudo apt-get install default-jdk;

# this is the open one:
sudo apt-get install openjdk-7-jdk

# Install Overkill (Oracle) JDK
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer

# These will be the paths generally.
#
# /usr/lib/jvm/java-7-oracle
# /usr/lib/jvm/java-6-openjdk-amd64
# /usr/lib/jvm/java-7-oracle

echo $JAVA_HOME; # this would have been set to one of the above paths.
