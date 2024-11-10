# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class InlineResponse2008(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, message: Object=None):  # noqa: E501
        """InlineResponse2008 - a model defined in Swagger

        :param message: The message of this InlineResponse2008.  # noqa: E501
        :type message: Object
        """
        self.swagger_types = {
            'message': Object
        }

        self.attribute_map = {
            'message': 'message'
        }
        self._message = message

    @classmethod
    def from_dict(cls, dikt) -> 'InlineResponse2008':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The inline_response_200_8 of this InlineResponse2008.  # noqa: E501
        :rtype: InlineResponse2008
        """
        return util.deserialize_model(dikt, cls)

    @property
    def message(self) -> Object:
        """Gets the message of this InlineResponse2008.

        Confirmation of successful preprocessing.  # noqa: E501

        :return: The message of this InlineResponse2008.
        :rtype: Object
        """
        return self._message

    @message.setter
    def message(self, message: Object):
        """Sets the message of this InlineResponse2008.

        Confirmation of successful preprocessing.  # noqa: E501

        :param message: The message of this InlineResponse2008.
        :type message: Object
        """

        self._message = message