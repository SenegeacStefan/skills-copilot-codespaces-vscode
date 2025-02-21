function skillsMember() {
    return {
        name: 'member',
        skills: ['JS', 'React', 'Node', 'Express', 'MongoDB'],
        showSkills: function() {
            this.skills.forEach((skill) => {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    };
}