# Change to the project directory
cd /root/aws-pipeline

# Set proper permissions for the scripts directory
chmod -R 755 scripts/

# Install project dependencies with npm, allowing root and unsafe permissions
sudo npm ci