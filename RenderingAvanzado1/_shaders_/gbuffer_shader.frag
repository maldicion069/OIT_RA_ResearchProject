#version 430 core

in vec3 fragPos;
in vec3 fragNormal;

uniform vec3 diffuse;
uniform float specular;

layout(location = 0) out vec4 position;
layout(location = 1) out vec4 normal;
layout(location = 2) out vec4 color;

void main() {
	position = vec4(fragPos, 1.0);
	normal = vec4(fragNormal, specular);
	color = vec4(diffuse, 1.0);
}